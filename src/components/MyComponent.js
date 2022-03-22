import { useMyWidget } from "../widgets/useMyWidget";

export function MyComponent(props) {
  const data = useMyWidget(props);

  // Render based on the data returned by the Hook
  return null;
}
