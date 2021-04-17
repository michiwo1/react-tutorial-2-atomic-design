import { PrimaryButton } from "./compnents/atoms/button/PrimaryButton";
import { SecondaryButton } from "./compnents/atoms/button/SecondaryButton";
import { SearchInput } from "./compnents/molecules/SearchInput";
import { UserCard } from "./compnents/organisms/user/UserCard";
import "./styles.css";

const user = {
  name: "テスト",
  image: "https://source.unsplash.com/0kL5NSDH_Z0",
  email: "1234@example.com",
  phone: "090-1111-2222",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
