//Lista de Tarjetas de Presentacion de usuarios
//TOMADOS DESDE UN ARREGLO
// FOTO , NOMBRE , COMPAÑIA



const Card = (props) => {
	return (
  	<div stye={{margin: '10em'}}>
    	<img src={props.avatar_url} />
      <div style={{display: 'inline-block' , marginLeft: 10}}>
      	<div style={{fontSize: '1.25em', fontWeight: 'bold' }} >{props.name} </div>
        <div> {props.compania} </div>
      </div>
    </div>
  );
};

let data = [
		{ name:"Manuel Vera",
      avatar_url:"https://avatars1.githubusercontent.com/u/36280115?s=460&v=4",
      compania:"Lagash"
    },
    { name:"Manuel Vera",
      avatar_url:"https://avatars1.githubusercontent.com/u/36280115?s=460&v=4",
      compania:"Lagash",
    },
    { name:"Manuel Vera",
      avatar_url:"https://avatars1.githubusercontent.com/u/36280115?s=460&v=4",
      compania:"Lagash"
    },
    { name:"Manuel Vera",
      avatar_url:"https://avatars1.githubusercontent.com/u/36280115?s=460&v=4",
      compania:"Lagash"
    }
];



const CardList = (props) => {
	return (
  	<div>
     {props.cards.map(card => <Card {...card} /> )}
    </div>
	);
}



ReactDOM.render(<CardList cards={data} />, mountNode); const Card = (props) => {
    return (
        <div stye={{ margin: '10em' }}>
            <img src={props.avatar_url} />
            <div style={{ display: 'inline-block', marginLeft: 10 }}>
                <div style={{ fontSize: '1.25em', fontWeight: 'bold' }} >{props.name} </div>
                <div> {props.compania} </div>
            </div>
        </div>
    );
};

let data = [
    {
        name: "Manuel Vera",
        avatar_url: "https://avatars1.githubusercontent.com/u/36280115?s=460&v=4",
        compania: "Lagash"
    },
    {
        name: "Manuel Vera",
        avatar_url: "https://avatars1.githubusercontent.com/u/36280115?s=460&v=4",
        compania: "Lagash",
    },
    {
        name: "Manuel Vera",
        avatar_url: "https://avatars1.githubusercontent.com/u/36280115?s=460&v=4",
        compania: "Lagash"
    },
    {
        name: "Manuel Vera",
        avatar_url: "https://avatars1.githubusercontent.com/u/36280115?s=460&v=4",
        compania: "Lagash"
    }
];



const CardList = (props) => {
    return (
        <div>
            {props.cards.map(card => <Card {...card} />)}
        </div>
    );
}



ReactDOM.render(<CardList cards={data} />, mountNode);