import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
`

export const LayoutCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
`

export const LayoutContent = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`

export const LayoutFooter = styled.div`
  width: 100%;
  height: 0px;
`
