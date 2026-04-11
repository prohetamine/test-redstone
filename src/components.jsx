/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { useStasPay } from 'stas-pay'
import * as Redstone from '@prohetamine/redstone'
//import * as Redstone from '/Users/stas/Desktop/redstone'

import { Body, WalletButton, Button, Container, Info, Input, Title, Data, SButton } from './styles'

export const Navigation = () => (
  <Container>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Link to='/'>
        <Button>useNote</Button>
      </Link>
      <Link to='/use-read-note'>
        <Button>useReadNote</Button>
      </Link>
      <Link to='/use-list'>
        <Button>useList</Button>
      </Link>
      <Link to='/use-read-list-item'>
        <Button>useReadListItem</Button>
      </Link>
      <Link to='/use-counter'>
        <Button>useCounter</Button>
      </Link>
      <Link to='/use-read-statistics'>
        <Button>useReadStatistics</Button>
      </Link>
      <Link to='/use-certificate'>
        <Button>useCertificate</Button>
      </Link>
    </div>
  </Container>
)

export const UseNote = ({ id, onChange, placeholder, data, commission: _commission }) => {
  const [value, setValue] = useState('')

  const note = Redstone.useNote(id, data)
      , cert = Redstone.useCertificate(id)
      , confirm = useStasPay()

  useEffect(() => {
    if (onChange) {
      onChange(note.value)
    }
  }, [note.value, onChange])

  useEffect(() => {
    setValue(note.value)
  }, [note.value, setValue])

  const handleClick = async () => {
    const _cert = await cert.recheckValue()

    if (!_cert) {
      alert('Cert error')
    }

    if (_cert.value === 0 && data.stas === true) {
      const commission = await cert.getCommission()
      const isConfirm = await confirm(commission)
      if (isConfirm) {
        await cert.updateValue(_commission)
      }
    }

    const commission = await note.getCommission()
    const isConfirm = await confirm(commission)
    if (isConfirm) {
      const isUpdate = await note.updateValue(value)
      if (!isUpdate) {
        alert('Error')
      }
    }
  }

  return (
    <Container
      style={{ 
        border: note.status === 'success' 
                  ? '3px solid rgba(65, 206, 0, 1)'
                  : note.status === 'pending' 
                      ? '3px solid rgba(232, 205, 0, 1)'
                      : note.status === 'error'
                          ? '3px solid rgba(232, 0, 31, 1)'
                          : '3px solid #00000000'
      }}
    > 
      <Title>useNote("{id}", {JSON.stringify(data)})</Title>
      <div style={{ display: 'flex' }}>
        <Input
          type="text" 
          placeholder={placeholder} 
          value={value} 
          onChange={({ target: { value } }) => setValue(value)}
        />
        <Button onClick={handleClick}>Save</Button>
      </div>
      <Info>{JSON.stringify(note.status)}</Info>
    </Container>
  )
}

export const UseList = ({ id, placeholder, data, commission: _commission }) => {
  const [state, setState] = useState('')
  const list = Redstone.useList(id, data)
      , cert = Redstone.useCertificate(id)
      , confirm = useStasPay()

  const handleClick = async () => {
    const _cert = await cert.recheckValue()

    if (!_cert) {
      alert('Cert error')
    }

    if (_cert.value === 0 && data.stas === true) {
      const commission = await cert.getCommission()

      const isConfirm = await confirm(commission)
      if (isConfirm) {
        await cert.updateValue(_commission)
      }
    }

    const commission = await list.getCommission()
    const isConfirm = await confirm(commission)
    if (isConfirm) {
      const isUpdate = await list.addValue(state)
      if (!isUpdate) {
        alert('Error')
      }
    }
  }

  return (
    <Container
      style={{ 
        border: list.status === 'success' 
                  ? '3px solid rgba(65, 206, 0, 1)'
                  : list.status === 'pending' 
                      ? '3px solid rgba(232, 205, 0, 1)'
                      : list.status === 'error'
                          ? '3px solid rgba(232, 0, 31, 1)'
                          : '3px solid #00000000'
      }}
    >

      <Title>UseList("{id}", {JSON.stringify(data)})</Title>
      <div style={{ display: 'flex' }}>
        <Input 
          type="text"
          placeholder={placeholder}
          value={state} 
          onChange={({ target: { value } }) => setState(value)}
        />
        <Button onClick={handleClick}>Save</Button>
      </div>
      <Info>{JSON.stringify(list.status)}</Info>
      <div>
        {
          list.value.map((item, key) => (
            <Data key={key}>
              <span>
                {item.text}
                <span style={{ marginLeft: '5px', color: '#999' }}>(index: {item.index} addr: {item.address.slice(0, 7)} chainId: {item.chainId})</span> 
                <SButton onClick={() => list.updateValue(item, state)}>edit</SButton>
                <SButton onClick={() => list.updateValue(item, "")}>delete</SButton>
                {item.hasEdit ? '(Edit)' : '(NO Edit)'}
              </span>
            </Data>
          ))
        }
      </div>
    </Container>
  )
}

export const UseReadNote = ({ id, onChange, data, placeholder }) => {
  const note = Redstone.useReadNote(id, data)

  useEffect(() => {
    if (onChange) {
      onChange(note.value)
    }
  }, [note.value, onChange])

  return (
    <Container
      style={{ 
        border: note.status === 'success' 
                  ? '3px solid rgba(65, 206, 0, 1)'
                  : note.status === 'pending' 
                      ? '3px solid rgba(232, 205, 0, 1)'
                      : note.status === 'error'
                          ? '3px solid rgba(232, 0, 31, 1)'
                          : '3px solid #00000000'
      }}
    >
      <Title>useReadNote("{id}", {JSON.stringify(data)})</Title>
      <Data style={{ color: note.value ? '#fff' : '#909090' }}>{note.value || placeholder}</Data>
      <Info>{JSON.stringify(note.status)}</Info>
    </Container>
  )
}

export const UseReadListItem = ({ id, onChange, find = {}, data = {} }) => {
  const item = Redstone.useReadListItem(id, find, data)

  useEffect(() => {
    if (onChange) {
      onChange(item.value)
    }
  }, [item.value, onChange])

  return (
    <Container
      style={{ 
        border: item.status === 'success' 
                  ? '3px solid rgba(65, 206, 0, 1)'
                  : item.status === 'pending' 
                      ? '3px solid rgba(232, 205, 0, 1)'
                      : item.status === 'error'
                          ? '3px solid rgba(232, 0, 31, 1)'
                          : '3px solid #00000000'
      }}
    >

      <Title>UseReadListItem("{id}", {JSON.stringify(find)}, {JSON.stringify(data)})</Title>
      <Info>{JSON.stringify(item.status)}</Info>
      <div>
        {
          item.value && [item.value].map((item, key) => (
            <Data key={key}>
              <span>
                {item.text}
                <span style={{ marginLeft: '5px', color: '#999' }}>(index: {item.index} addr: {item.address.slice(0, 7)} chainId: {item.chainId})</span> 
                {item.hasEdit ? '(Edit)' : '(NO Edit)'}
              </span>
            </Data>
          ))
        }
      </div>
    </Container>
  )
}

export const UseCounter = ({ id, data, placeholder, commission: _commission }) => {
  const counter = Redstone.useCounter(id, data)
      , cert = Redstone.useCertificate(id)
      , confirm = useStasPay()

  const handleClick = async () => {
    const _cert = await cert.recheckValue()

    if (!_cert) {
      alert('Cert error')
    }

    if (_cert.value === 0 && data.stas === true) {
      const commission = await cert.getCommission()
      const isConfirm = await confirm(commission)
      if (isConfirm) {
        await cert.updateValue(_commission)
      }
    }

    const commission = await counter.getCommission()
    const isConfirm = await confirm(commission)
    if (isConfirm) {
      const isUpdate = await counter.updateValue()
      if (!isUpdate) {
        alert('Error')
      }
    }
  }
  
  return (
    <Container
      style={{ 
        border: counter.status === 'success' 
                  ? '3px solid rgba(65, 206, 0, 1)'
                  : counter.status === 'pending' 
                      ? '3px solid rgba(232, 205, 0, 1)'
                      : counter.status === 'error'
                          ? '3px solid rgba(232, 0, 31, 1)'
                          : '3px solid #00000000'
      }}
    >
      <Title>useCounter("{id}", {JSON.stringify(data)})</Title>
      <div style={{ display: 'flex' }}>
        <Button onClick={handleClick}>{placeholder}: {counter.value.count} {counter.value.voted ? '(voted)' : ''}</Button>
      </div>
      <Info>{JSON.stringify(counter.status)}</Info>
    </Container>
  )
}

export const UseReadStatistics = () => {
  const statistics = Redstone.useReadStatistics({
    interval: 5000,
    watch: true
  })

  return (
    <Container
      style={{ 
        border: statistics.status === 'success' 
                  ? '3px solid rgba(65, 206, 0, 1)'
                  : statistics.status === 'pending' 
                      ? '3px solid rgba(232, 205, 0, 1)'
                      : statistics.status === 'error'
                          ? '3px solid rgba(232, 0, 31, 1)'
                          : '3px solid #00000000'
      }}
    >
      <Title>useReadStatistics()</Title>
      <Data>{JSON.stringify(statistics.value, '<br />', 4)}</Data>
      <Info>{JSON.stringify(statistics.status)}</Info>
    </Container>
  )
}

export const UseCertificate = ({ id, data, commission: _commission }) => {  
  const cert = Redstone.useCertificate(id, data)
      , confirm = useStasPay()

  const handleCert = async () => {
    const _cert = await cert.recheckValue()

    if (!_cert) {
      alert('Cert error')
    }

    if (_cert.value === 0) {
      const commission = await cert.getCommission()
      const isConfirm = await confirm(commission)
      if (isConfirm) {
        await cert.updateValue(_commission)
      }
    }
  }

  return (
    <Container
      style={{ 
        border: cert.status === 'success' 
                  ? '3px solid rgba(65, 206, 0, 1)'
                  : cert.status === 'pending' 
                      ? '3px solid rgba(232, 205, 0, 1)'
                      : cert.status === 'error'
                          ? '3px solid rgba(232, 0, 31, 1)'
                          : '3px solid #00000000'
      }}
    >
      <Title>useCertificate("{id}", {JSON.stringify(data)})</Title>
      <div style={{ display: 'flex' }}>
        <Data>{cert.value}</Data>
        <Button onClick={handleCert}>Cert</Button>
      </div>
      <Info>{JSON.stringify(cert.status)}</Info>
    </Container>
  )
}

export const UseCommission = ({ data }) => {  
  const commission = Redstone.useCommission(data)

  const [ownerCommission, setOwnerCommission] = useState(0)
      , [certCommission, setCertCommission] = useState(0)

  useEffect(() => {
    const timeId = setTimeout(async () => {
      const { owner, cert } = commission.value
      setOwnerCommission(owner)
      setCertCommission(cert)
    }, 100)

    return () => clearTimeout(timeId)
  }, [commission.value])

  const handleOwnerCommission = async () => {
    const isUpdate = await commission.updateOwnerCommission(ownerCommission)
    console.log(isUpdate)
  }

  const handleCertCommission = async () => {
    const isUpdate = await commission.updateCertificateCommission(certCommission)
    console.log(isUpdate)
  }

  return (
    <Container
      style={{ 
        border: commission.status === 'success' 
                  ? '3px solid rgba(65, 206, 0, 1)'
                  : commission.status === 'pending' 
                      ? '3px solid rgba(232, 205, 0, 1)'
                      : commission.status === 'error'
                          ? '3px solid rgba(232, 0, 31, 1)'
                          : '3px solid #00000000'
      }}
    >
      <Title>useCommission({JSON.stringify(data)})</Title>
      <div style={{ display: 'flex' }}>
        <Input 
          type="text"
          value={ownerCommission} 
          onChange={({ target: { value } }) => setOwnerCommission(value)}
        />
        <Button onClick={handleOwnerCommission}>owner comission</Button>
      </div>
      <div style={{ display: 'flex' }}>
        <Input 
          type="text"
          value={certCommission} 
          onChange={({ target: { value } }) => setCertCommission(value)}
        />
        <Button onClick={handleCertCommission}>cert comission</Button>
      </div>
      <Info>{JSON.stringify(commission.status)}</Info>
    </Container>
  )
}

export {
  Body,
  WalletButton
}