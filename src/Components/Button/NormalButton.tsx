
import { Button } from "antd";
import { FC, useState } from "react";
import './NormalButton.scss'

interface NormalButton {
  
  label: any,
  onClick: any,
  selected?: boolean,
  icon?: any,
}

const NormalButton: FC<NormalButton> = ({
  selected, 
  icon, 
  label,
  onClick
}) => {
  return (
    <Button 
      type="text"
      className={`normalBtn ${selected && 'selectedBtn'}`}
      icon={icon} 
      onClick={onClick}
    >
      {label}
    </Button>
  )
}

export default NormalButton;