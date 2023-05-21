import { css } from 'styled-components'

export const baseHover = css`
  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
`

export const quillModal = css`
  .quill {
    max-width: 400px;
  }

  .ql-editor {
    height: 300px;
  }
`
export const flexRow = (justify: string, align: string) => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
`

export const flexColumn = (justify: string, align: string) => css`
  display: flex;
  flex-direction: column;
  justify-content: ${justify};
  align-items: ${align};
`
