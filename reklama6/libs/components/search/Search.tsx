import {
  MenuFoldOutlined,
  PushpinOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import {
  Button,
  CategoryButton,
  Input,
  SearchButton,
  SearchContainer,
} from "./styles";

const Search = () => {
  return (
    <SearchContainer>
      <CategoryButton icon={<MenuFoldOutlined />}>
        Сите категории
      </CategoryButton>
      <Input
        placeholder="BMW, Iphone, Samsung, Оглас број"
        onFocus={(event) => console.log(event)}
      />
      <Button icon={<PushpinOutlined />}>Цела Македонија</Button>
      <SearchButton icon={<SearchOutlined style={{ fontSize: "20px" }} />} />
    </SearchContainer>
  );
};

export default Search;
