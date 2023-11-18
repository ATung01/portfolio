import React from "react";
import styled from "styled-components";

const Button = styled.div`
height: 75px;
display: flex;
align: center;
`

function NavButton() {
    return (
      <Button>
        <select>
          <option value="fruit">Fruit</option>
          <option value="vegetable">Vegetable</option>
          <option value="meat">Meat</option>
        </select>
      </Button>
    )
}

export default NavButton