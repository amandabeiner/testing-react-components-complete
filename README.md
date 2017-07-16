# Testing React Components

I created this exercise as a follow along to a Launch Academy article to help students learn good testing patterns for their React applications. The app renders an `ElephantContainer`, which in turn renders an `Elephant` component. Clicking the `Elephant` component toggles the state of the `ElephantContainer` to `{babyElephant: true}` or `{babyElephant: false}`, and shows a new elephant photo accordingly. 

Students should test that the `Elephant` component: 

* Renders the expected html (`img` and `h1` tags)
* Renders the specific photo url it receives as props
* Triggers the `onClick` function when clicked.

Students should test that the `ElephantContainer`:

* Renders with the specified initial state (aka `babyElephant: false`)
* Renders an `Elephant` component
* Renders that `Elephant` component with the expected props when `babyElephant` is `true` and when `babyElephant` is `false`
* Renders the tree of the `Elephant` component when it is `mounted`

Students should test that the `handleClick` function on the `ElephantContainer`:

* Is invoked when the child `Elephant` component is clicked
* Toggles the state of the `ElephantContainer`

## Setup
To get set up, run the following commands:

```sh
$ npm install
$ karma start
```
