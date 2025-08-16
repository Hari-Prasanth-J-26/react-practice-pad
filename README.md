# React App


<p>Basically when useState is used(which means special variable in react will render the changes in the component) Entire component will render once again, if this variable is rendered inside the component
When you are changing the local variables (useState) react re-renders the component
Loads -> Render -> API -> Render
useEffect -> basically to fetch the api calls, but it first render the component and then fetch the api calls and fill the data 
If there is no dependancy array mentioned in the syntax, it will basicall rendere at every time the component renders
If there is a empty dependancy array [] -> then it will do initial render (just once)
If there is some values inside the dependancy array -> then it will called every time the value changes
useState ->
Never create useState variables outside the component
Create state variables at the top level inside the component
Don't create state variables inside the if(), for(), function() {}, even though it is valid in JS. But this will cause inconsistent code
type rafce in vscode it will generate a react functional component -> install this ES7+ React/Redux/React-Native snippets in your extensions 

Functional component -> It's just a normal javascript function (arrow function) which will return some piece of JSX.
Class component -> class componanentName extends React.Component or Component{
    render() {
        return()
    }
}
never update state variables directly inside the class component

class component life cyclce
1. constructor
2. render
3. componentDidMount() -> api calls
4. componentDidUpdate() -> setState() is called
5. componentWillUnmount() - > once you moved to the next component

Hooks are utilities or helper functions

# Higher order components
Higher order components is a function that takes a component and returns a component with added functionality

# Lifting state up -> controlled and uncontrolled component

# Redux -> works in the data layer

# Immer -> tiny immutable copy

# Types of testing
1. Unit testing -> testing one component in isolation
2. Integration testing -> multiple components corelated
3. End to End testing -> e2e testing
React testing library -> Jest -> Jest is javascript testing framework

# setup for testing 
- Install react testing library
- Install jest
- Install babel dependencies
- Configure babel (babel is transpiler which parcel uses)
- Configure parcel config file to disable default babel transpilation
- Jest configuration npx create-jest
- Install jsdom library
- Install @babel/present-react - to make JSX work it in the test case
- Include @babel/present-react inside the babel configuration
- Install @testing-library/jest-dom
- describe block is for grouping the test cases

"type": "commonjs", from package.json
_ _ = dunder method (two underscores -> __)

We already have babel configuration file for parcel, if we add new babel configuration file(babel.config.js) for jest. Then parcel will confuse.
To resolve that we have to use .parcelrc file configuration from Parcel docs

# "watch-test": "jest --watch"
once you execute npm run watch-test -> your code will be executed each time it's saved


# act
act is coming from the "react-dom/test-utils" and it returns a promise
</p>

