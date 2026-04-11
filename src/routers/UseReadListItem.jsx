import { Body, UseReadListItem } from '../components.jsx'

const _UseReadListItem = () => {
  return (
    <Body>
      <div>
        <UseReadListItem 
          id='uts-[empty-allow-write]' 
          find={{ chainId: 97, index: 0 }}
          placeholder='empty NO WRITE ME'
        />
        <UseReadListItem 
          id='uts-[once]' 
          find={{ chainId: 97, index: 0 }}
          data={{ once: true }}
          placeholder='empty NO WRITE ME'
        />
        <UseReadListItem 
          id='uts-[once]' 
          find={{ chainId: 97, index: 1 }}
          data={{ once: true }}
          placeholder='empty NO WRITE ME'
        />
        <UseReadListItem 
          id='uts-[once]' 
          find={{ chainId: 97, index: 2 }}
          data={{ once: true }}
          placeholder='empty NO WRITE ME'
        />
        <UseReadListItem 
          id='uts-[once]' 
          find={{ chainId: 97, index: 3 }}
          data={{ once: true }}
          placeholder='empty NO WRITE ME'
        />
      </div>
    </Body>
  )
}

export default _UseReadListItem