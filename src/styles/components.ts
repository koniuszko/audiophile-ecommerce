import styled from "styled-components";

export const CategoryCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background-color: #f1f1f1;
  border-radius: 8px;
  height: 165px;
  position: relative;

  .category-image {
    transform: translateY(-40%);
  }

  .category-name {
    transform: translateY(-52px);
  }

  .category-link {
    transform: translateY(-52px);
  }
`


export const GrayButtonWrapper = styled.button`
  font-size: 15px;
  font-weight: 500;
  color: #808080;
  width: 80px;

  &:hover {
    color: #d87d4a;
  }
`