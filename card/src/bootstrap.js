import faker from 'faker';

// const mountCard = (el) => {
// 	let render = "";
// 	const name = faker.name();
// 	const avatar = faker.image();
// 	render = `
// 		<header>
// 		<div>${avatar} <span>${name}</span></div>
// 		</header>
// 	`
// 	el.innerHTML = render;
// }

const mountCard = (el) => {
	let render = "";
	const account = faker.finance.account();
	const accountName = faker.finance.accountName();
	const amount = faker.finance.amount();
	render = `
			<div>
			<h2>Account: ${accountName} | Number: ${account}</h2>
			<h3>Amount: ${amount}</h3>
			</div>
		`
	el.innerHTML = render;
}

if (process.env.NODE_ENV === 'development') {
	const el = document.querySelector('#root-card');

	if (el) {
		mountCard(el);
	}
}

export {mountCard};