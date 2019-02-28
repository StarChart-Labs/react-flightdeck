# react-flightdeck
[![npm (scoped)](https://img.shields.io/npm/v/@starchart-labs/react-flightdeck.svg)](https://www.npmjs.com/package/@starchart-labs/react-flightdeck) [![Build Status](https://travis-ci.com/StarChart-Labs/react-flightdeck.svg?branch=master)](https://travis-ci.com/StarChart-Labs/react-flightdeck) [![Black Duck Security Risk](https://copilot.blackducksoftware.com/github/repos/StarChart-Labs/react-flightdeck/branches/master/badge-risk.svg)](https://copilot.blackducksoftware.com/github/repos/StarChart-Labs/react-flightdeck/branches/master)

Flightdeck is the collection of common user interface components that StarChart Labs
uses across its various applications. This React library has fully functional and
fully styled components ready for you to use!

## Installation
In your React application directory run:

`npm i --save @starchart-labs/react-flightdeck`

or for Yarn:

`yarn add @starchart-labs/react-flightdeck`

## Usage

### Modal
`Modal` is a component which creates a modal dialog box, with a customizable title, content area, and a list of buttons to display along the bottom.

Import the component from the library, and optionally import the ready-made styles if you do not want to provide your own:

```js
import { Modal } from '@starchart-labs/react-flightdeck';
import '@starchart-labs/react-flightdeck/dist/styles/Modal.css';
```

The parent component (whatever is hosting the modal) must control the state of the modal. You should have a variable for whether the modal is open or closed in the parent component's state, and a method for closing the modal:

```js
constructor() {
  super();
  this.state = {
    modalOpen: false
  }
  this.closeModal = this.closeModal.bind(this);
}

closeModal() {
  this.setState({
    modalOpen: false
  })
}
```

Then in the parent component's render method, define the modal!

```js
render() {
  return(
    <div>
    <Modal title='Sample Modal'
        open={this.state.modalOpen}
        onClose={this.closeModal}
        content={
          <React.Fragment>
            The contents of this modal!
          </React.Fragment>
        }
        buttons={[
           <button key='close-button' className='button' onClick={this.closeModal}>Close</button>,
        ]}
      />
    </div>
    <button onClick={() => this.setState({modalOpen:true})}>Open the Modal</button>
  );
}
```

The properties of the `Modal` component are as follows:

* `open` - A boolean that determines whether the modal is open or not
* `onClose` - A function reference that will be called when the background is clicked or the X button in the title bar is clicked. For proper functionality it should set the boolean referenced in `open` to false, but it may do other actions as well such as clearing out form inputs
* `content` - a JSX string defining what should appear in the modal content area. Can be anything.
* `buttons` - An array of JSX items that will be displayed horizontally across the bottom bar of the modal. Intended for action buttons.

In the example above, the component will render a button that says "Open the Modal". When clicked, the modal will open with a title of "Sample Modal", a content area which says "The contents of this modal!", and one button on the bottom which also closes the modal (in addition to the X in the top bar, or clicking the background).
