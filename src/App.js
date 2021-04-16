import { PrimaryButton } from "./compnents/atoms/button/PrimaryButton";
import { SecondaryButton } from "./compnents/atoms/button/SecondaryButton";
import { SearchInput } from "./compnents/molecules/SearchInput";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
    </div>
  );
}
