import * as React from 'react';

export default class Profile extends React.Component<any, any> {
	public render() {
		return (
			<div>
				<section className="bg-primary" id="about">
					<div className="container">
						<div className="row">
							<div className="col-lg-8 mx-auto text-center">
								<h2 className="section-heading text-white">Who is this guy?</h2>
								<hr className="light my-4" />
								<p className="text-faded mb-4">
									I am a current undergraduate student at Northeastern University,seeking a degree in
									Computer Science. Currently, I work on all sorts of different software projects,
									including mobile apps, websites, and Amazon Alexa skills. In my free time, I enjoy
									flying planes, and I am currently working towards my private pilot's license.
								</p>
								<img src="img/profile.jpg" alt="Profile Picture" style={styles.profilePic} />
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

const styles = {
	profilePic: {
		borderRadius: '50%',
		width: '40%'
	}
};
