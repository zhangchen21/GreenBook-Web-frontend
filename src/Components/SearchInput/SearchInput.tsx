import { Button, Input } from "antd";
import {
  SearchOutlined
} from "@ant-design/icons";
import { FC, useState } from "react";
import './SearchInput.scss'

const { TextArea } = Input;

const SearchInput: FC= () => {
  const [question, setQuestion] = useState<string>('');

  return (
    <div className="searchInput">
      <Input  
        className="questionArea" 
        placeholder="请输入"
        allowClear
        suffix={<SearchOutlined />}
        value={question}  
        onChange={(e) => setQuestion(e.target.value)}
      />      
  </div>
  );
};

export default SearchInput;
