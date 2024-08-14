function HelloComponent() {
    return (
        <div>
            <h3>Hello Component</h3>
            <button onClick={() => { alert('hello')}}>
                Click this button.
            </button>
        </div>
    )
}

export default HelloComponent