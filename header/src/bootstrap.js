import faker from 'faker';

const mountHeader = (el) => {
	let render = "";
	const name = faker.fake('{{name.firstName}}') ;
	const lastName = faker.fake('{{name.lastName}}') ;

	const avatar = faker.image.avatar();
	render = `
		<header>
		<div><h1>User name: ${name} ${lastName}</h1></div>
		</header>
	`
	el.innerHTML = render;
}


if (process.env.NODE_ENV === 'development') {
	const el = document.querySelector('#root-header');

	if (el) {
		mountHeader(el);
	}
}

export {mountHeader};