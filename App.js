import Routes from "./Routes";
import { Provider } from "react-redux";
import { store } from "./states/store";
export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
