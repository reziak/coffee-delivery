import styled from 'styled-components'

export const CardContainer = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${(props) => props.theme.colors['gray-200']};
  border-radius: 6px 36px 6px 36px;
  padding: 5rem 1.25rem 1.5rem;
  max-width: 16rem;
  position: relative;
  margin-top: 20px;

  img {
    position: absolute;
    top: -20px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.75rem;
    margin-bottom: 1rem;

    li {
      font-size: 0.625rem;
      line-height: 1.3;
      color: ${(props) => props.theme.colors['yellow-dark']};
      background: ${(props) => props.theme.colors['yellow-light']};
      text-transform: uppercase;
      padding: 0.25rem 0.5rem;
      font-weight: 700;
      border-radius: 100px;
    }
  }

  strong {
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
    line-height: 1.3;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme.colors['gray-800']};

    & + p {
      font-size: 0.875rem;
      line-height: 1.3;
      text-align: center;
      margin-bottom: 2.125rem;
    }
  }

  form {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 0.5rem;

    p {
      font-size: 0.875rem;
      flex: 1;

      span {
        font-family: 'Baloo 2', cursive;
        font-size: 1.5rem;
        line-height: 1.3;
      }
    }

    > button[type='button'] {
      border: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${(props) => props.theme.colors['gray-100']};
      background: ${(props) => props.theme.colors['purple-dark']};
      padding: 0.5rem;
      border-radius: 6px;
      transition: background 0.2s;

      &:hover {
        background: ${(props) => props.theme.colors.purple};
      }
    }
  }
`
