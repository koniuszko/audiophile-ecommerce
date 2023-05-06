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

  @media (min-width: 768px) {
    height: 165px;
    width: 30%;
  }

  @media (min-width: 1440px) {
    width: 350px;
  }
`


export const GrayButtonWrapper = styled.button`
  font-size: 15px;
  font-weight: 500;
  color: #808080;
  width: 80px;
  text-align: left;

  &:hover {
    color: #d87d4a;
  }
`