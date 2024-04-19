import './Card.css';

const Card = ({type,cost,user}) => {

    const renderBulletOrTick = (description) => {
        if (type === 'FREE') {
          if (
            description === 'Unlimited Private Projects' ||
            description === 'Dedicated Phone Support' ||
            description === 'Free Subdomain' ||
            description === 'Monthly Status Reports'
          ) {
            return (
              <>
                {/* <span className="bullet">x </span> */}
                <span className="benefit" style={{ opacity: 0.5 }}>x {description}</span>
              </>
            );
          }
          else
          {
            return(
                <>
                <span className="benefit">&#10003; {description}</span>
                </>
            )
            
          }
        } else if (type === 'PLUS' && description === 'Monthly Status Reports') {
          return (
            <>
              {/* <span className="bullet">x </span> */}
              <span className="benefit" style={{ opacity: 0.5 }}>x {description}</span>
            </>
          );
        } else {
          return (
            <>
              {/* <span className="tick">&#10003; </span> */}
              <span className="benefit">&#10003; {description}</span>
            </>
          );
        }
      };
  return (
    <div className="card">
        <div className="card-header">
            <h6><span className="type">{type}</span></h6>
            <h1>{cost}</h1>
        </div>      
        <div className="card-body">         
        
        <p>{renderBulletOrTick(`${user}`)}</p>
        <p> {renderBulletOrTick('50GB Storage')} </p>
        <p> {renderBulletOrTick('Unlimited Public Projects')} </p>
        <p>{renderBulletOrTick('Community Access')}</p>
        <p> {renderBulletOrTick('Unlimited Private Projects')} </p>
        <p> {renderBulletOrTick('Dedicated Phone Support')} </p>
        <p> {renderBulletOrTick('Free Subdomain')} </p>
        <p> {renderBulletOrTick('Monthly Status Reports')} </p>

        <button className="button btn btn-primary">BUTTON</button>
        </div>
    </div>
  )
}

export default Card;