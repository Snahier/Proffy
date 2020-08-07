import styled from "styled-components"

export const PageTeacherList = styled.div`
  width: 100vw;
  height: 100vh;

  main {
    margin: 3.2rem auto;
    width: 90%;
  }

  #search-teachers {
    margin-top: 3.2rem;
    label {
      color: var(--color-text-in-primary);
    }
  }

  @media (min-width: 700px) {
    max-width: 100%;

    main {
      padding: 3.2rem 0;
      max-width: 740px;
      margin: 0 auto;
    }

    #search-teachers {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 16px;
      position: absolute;
      bottom: -28px;
      .input-block {
        & + .input-block {
          margin-top: 0;
        }
      }
      .select-block {
        & + .select-block {
          margin-top: 0;
        }
      }
      button {
        width: 100%;
        height: 5.6rem;
        background: var(--color-secondary);
        color: var(--color-button-text);
        border: 0;
        border-radius: 0.8rem;
        font: 700 1.6rem Archivo;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        transition: background-color 0.2s;
        margin-top: 3.2rem;

        &:hover {
          background: var(--color-secondary-dark);
        }
      }
    }
  }
`
