import * as React from 'react';

export default class Header extends React.Component<any, any> {
	public render() {
		return (
			<div className="App">
				<header className="masthead text-center text-white d-flex flex-column">
					<div className="container my-auto">
						<div className="row">
							<div className="col-lg-10 mx-auto">
								<h1 className="text-uppercase">
									<strong>Nils Backe</strong>
								</h1>
								<hr />
							</div>
							<div className="col-lg-8 mx-auto">
								<p className="text-faded mb-4">Software Developer</p>
								<a className="btn btn-primary btn-xl js-scroll-trigger mb-5" href="#about">
									Find Out More
								</a>
							</div>
						</div>
					</div>
					<div className="row mx-auto mb-2">
						<div className="col-1 offset-4 col-sm-2 offset-sm-2 col-xs-3 offset-xs-0">
							<a href="https://github.com/NilsBacke" target="_blank">
								<img className="img-fluid img-socialmedia" src={require('./img/github.svg')} alt="" />
							</a>
						</div>
						<div className="col-1 col-sm-2 col-xs-3">
							<a href="https://www.linkedin.com/in/nilsbacke/" target="_blank">
								<img className="img-fluid img-socialmedia" src={require('./img/linkedin.png')} alt="" />
							</a>
						</div>
						<div className="col-1 col-sm-2 col-xs-3">
							<a href="https://twitter.com/NilsBacke" target="_blank">
								<img className="img-fluid img-socialmedia" src={require('./img/twitter.png')} alt="" />
							</a>
						</div>
						<div className="col-1 col-sm-2 col-xs-3">
							<a className="js-scroll-trigger" href="#contact" target="_blank">
								<img className="img-fluid img-socialmedia" src={require('./img/email.svg')} alt="" />
							</a>
						</div>
					</div>
				</header>
			</div>
		);
	}
}
