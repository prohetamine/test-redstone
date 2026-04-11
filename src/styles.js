import { motion } from 'framer-motion'
import { styled } from 'styled-components'

export const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const WalletButton = styled(motion.div)`
  position: fixed;
  right: 15px;
  top: 15px;
  min-width: 100px;
  background-color: #EAFF00;
  color: #202020;
  padding: 10px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-radius: 4px;
  font-family: "SUSE Mono", sans-serif;
  cursor: pointer;
`

export const Title = styled.div`
  margin: 10px;
  margin-bottom: 5px;
  color: #000;
  font-family: "SUSE Mono", sans-serif;
  font-size: 18px;
`

export const Input = styled(motion.input)`
  width: 100%;
  box-sizing: border-box;
  margin: 5px;
  background-color: #5b5b5b;
  color: #d0d0d0;
  padding: 5px 9px;
  border: 3px solid #00000000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-radius: 4px;
  font-family: "SUSE Mono", sans-serif;
  cursor: pointer;
  outline: none;
`

export const Button = styled(motion.div)`
  margin: 5px;
  box-sizing: border-box;
  background-color: #b3b3b3;
  color: #2b2b2b;
  padding: 5px 9px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-radius: 4px;
  font-family: "SUSE Mono", sans-serif;
  cursor: pointer;
  outline: none;
`

export const SButton = styled(motion.span)`
  margin: 3px;
  box-sizing: border-box;
  background-color: #bfbebe;
  padding: 2px 4px;
  border-radius: 4px;
  color: #444;
  border: none;
  font-size: 16px;
  font-family: "SUSE Mono", sans-serif;
  cursor: pointer;
  outline: none;
`

export const Data = styled(motion.div)`
  margin: 5px;
  width: calc(100% - 10px);
  background-color: #5b5b5b;
  color: #d0d0d0;
  padding: 15px;
  border: none;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  border-radius: 4px;
  font-family: "SUSE Mono", sans-serif;
  outline: none;
  overflow-wrap: break-word; 
  word-break: normal; 
  white-space: pre-wrap;
  overflow-wrap: anywhere;
`

export const Container = styled.div`
  max-width: 900px;
  min-width: 100px;
  background-color: rgb(131, 131, 131);
  padding: 5px;
  border-radius: 4px;
  transform: translate(0px, 0px);
  margin-bottom: 20px;
`

export const Info = styled(motion.div)`
  margin: 5px;
  width: calc(100% - 10px);
  box-sizing: border-box;
  background-color: rgb(63, 63, 63);
  color: #838383;
  padding: 15px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border-radius: 4px;
  font-family: "SUSE Mono", sans-serif;
  outline: none;
  overflow-wrap: break-word; 
  word-break: normal; 
  white-space: pre-wrap;
  overflow-wrap: anywhere;
`
