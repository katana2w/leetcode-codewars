/**
 * https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/typescript
 *
 * Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
 *
 * For example, a tower with 3 floors looks like this:
 *
 * [
 *   "  *  ",
 *   " *** ",
 *   "*****"
 * ]
 * And a tower with 6 floors looks like this:
 *
 * [
 *   "     *     ",
 *   "    ***    ",
 *   "   *****   ",
 *   "  *******  ",
 *   " ********* ",
 *   "***********"
 * ]
 */

export const towerBuilder = (nFloors: number): string[] => {
    const width = 2 * nFloors - 1;
    const result: string[] = [];

    for (let i = 0; i < nFloors; i++) {
        const stars = 2 * i + 1;
        const spaces = (width - stars) / 2;

        result.push(
            " ".repeat(spaces) +
            "*".repeat(stars) +
            " ".repeat(spaces)
        );
    }

    r
