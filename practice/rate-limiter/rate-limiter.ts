import {Request, Response, NextFunction} from 'express'
import Redis from 'ioredis'

const redisClient = new Redis()

const RATE_LIMIT = 10;
const EXPIRATION_WINDOW = 60; // seconds

export const rateLimiter = async (req: Request, res: Response, next: NextFunction) => {
    const key = `rate:${req.ip}`

    const currentRequests = await redisClient.incr(key)

    if (currentRequests === 1) {
        await redisClient.expire(key, EXPIRATION_WINDOW)
    }

    if (currentRequests > RATE_LIMIT) {
        res.status(429).json({error: 'Too many requests'})
    }

    next()
}
