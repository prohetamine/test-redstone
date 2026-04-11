import { Body, UseCertificate, UseCommission } from '../components.jsx'

const _UseCertificate = () => {
  return (
    <Body>
      <div>
        <UseCertificate id='none' data={{  }} commission={10} />
      </div>
      <div>
        <UseCommission data={{}} />
      </div>
    </Body>
  )
}

export default _UseCertificate