import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
`

export const LayoutCenter = styled.div`
  width: calc(100% - 300px);
  height: 100vh;
  display: table;
`

export const LayoutContent = styled.div`
  overflow-y: auto;
  width: 100%;
  height: calc(100vh - 100px);
`