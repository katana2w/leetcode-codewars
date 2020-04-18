// Liskov substitution principle

// class Person {
//
// }
//
// class Member extends Person {
//     access() {
//         console.log('you have rights!')
//     }
// }
//
// class Guest extends Person {
//     // isGuest = true;
// }
// class Frontend extends Member {
//     canCreateFrontend() {}
// }
//
// class Backend extends Member {
//     canCreateBackend() {}
// }
//
// class PersonFromAnotherPlace extends Guest {
//     access() {
//         throw new Error('No access!')
//     }
// }
//
// function openSecretDoor(member) {
//     member.access();
// }
//
// openSecretDoor(new Frontend())
// openSecretDoor(new Backend())
// // openSecretDoor(new PersonFromAnotherPlace())

// ==============================

class Component {
}

class ComponentWithTemplate extends Component {
    render() {
        return `<div>Component</div>`
    }
}

class HigherOrderComponent {

}

class HeaderComponent extends ComponentWithTemplate {
    onInit() {}
}

class FooterComponent extends ComponentWithTemplate {
    afterInit() {}
}

class HOC extends HigherOrderComponent {
    render() {
        throw new Error('No render!')
    }

    wrapComponent() {
        component.wrapped = true;
        return component;
    }
}

function renderComponent(component) {
    console.log(component.render())
}

renderComponent(new HeaderComponent());
renderComponent(new FooterComponent());