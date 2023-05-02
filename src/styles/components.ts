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