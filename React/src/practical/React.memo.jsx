const ChildComponent = ({ count }) => {
    console.log('Rendering Child Component')
    return <div>Count: {count}</div>
}

const MemoizedChildComponenet = React.memo(ChildComponent)