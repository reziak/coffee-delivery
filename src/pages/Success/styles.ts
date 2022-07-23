import styled from 'styled-components'

export const SuccessContainer = styled.div`
  padding: 5.75rem 0;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;

  div {
    flex: 1;
  }

  > div + div:last-child {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
`

export const ConfirmationContainer = styled.div`
  h1 {
    font-size: 2rem;
    line-height: 1.3;
    color: ${(props) => props.theme.colors['yellow-dark']};

    + p {
      font-size: 1.25rem;
      line-height: 1.6;
      margin-bottom: 2.5rem;
    }
  }
`

export const ClientInformationContainer = styled.div`
  width: 100%;
  border: 1px double transparent;
  border-radius: 6px 36px 6px 36px;
  background-image: linear-gradient(
      ${(props) => props.theme.colors['gray-100']},
      ${(props) => props.theme.colors['gray-100']}
    ),
    linear-gradient(
      to right,
      ${(props) => props.theme.colors.yellow},
      ${(props) => props.theme.colors.purple}
    );
  background-origin: border-box;
  background-clip: content-box, border-box;

  .wrapper {
    padding: 2.5rem;
  }

  div + div {
    margin-top: 2rem;
  }
`

export const ClientInformationItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    border-radius: 50%;
    width: 32px;
    height: 32px;
    color: ${(props) => props.theme.colors['gray-100']};
    display: flex;
    align-items: center;
    justify-content: center;

    &.location {
      background: ${(props) => props.theme.colors['purple-dark']};
    }

    &.timer {
      background: ${(props) => props.theme.colors.yellow};
    }

    &.currency {
      background: ${(props) => props.theme.colors['yellow-dark']};
    }
  }

  div {
    p,
    strong {
      line-height: 1.3;
    }
  }
`
