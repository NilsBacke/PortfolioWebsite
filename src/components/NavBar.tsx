import * as React from 'react';

export default class NavBar extends React.Component<any, any> {
	public render() {
		return (
			<div className="App">
				<nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
					<div className="container">
						<a className="navbar-brand js-scroll-trigger" href="#page-top">
							Nils Backe
						</a>
						<button
							className="navbar-toggler navbar-toggler-right"
							type="button"
							data-toggle="collapse"
							data-target="#navbarResponsive"
							aria-controls="navbarResponsive"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon" />
						</button>
						<div className="collapse navbar-collapse" id="navbarResponsive">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item">
									<a className="nav-link js-scroll-trigger" href="#about">
										About
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link js-scroll-trigger" href="#work">
										Work
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link js-scroll-trigger" href="#portfolio">
										Portfolio
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link js-scroll-trigger" href="#contact">
										Contact
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link js-scroll-trigger" href="tutorials.html">
										Tutorials
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}
