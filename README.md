# learn-react-effect-hook

**useEffect Hook**
useEffect is a substitution to class component lifecycle methods. We can use it to copy the functionality of componentDidMount, componentDidUpdate etc. It helps to tell the component to execute some logic after rendering the
component.

**Why it is used inside the component?**
“useEffect” function is defined in the component so that the variables and functions defined within the components are directly accessible. It uses the concept of closure to provide access to local functions and the variables defined within the function.

**Does it run after every render?**
Yes, it runs before the first render and after every update. Though we can customise this using by passing some additional arrays. useEffect runs aftervevery update because every action requires newly updated data.

**Note:** Unlike componentDidMount or componentDidUpdate, the results set for useEffect do not prevent the browser from updating the screen. This makes your app feel more responsive. Most effects do not happen simultaneously.