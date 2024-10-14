import useToggle from "./practical/customHook";

export default function ToggleComponent() {
  const [isVisible, toggleVisibility] = useToggle(false)

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'}
      </button>

      {
        isVisible && <p>Hello</p>
      }
    </div>
  )
}