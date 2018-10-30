import React from 'react';
import { Link } from 'react-router-dom';

const Setup = () => {
	return (
		<div className="container">
			<div className="jumbotron">
				<div class="row flex">
					<div class="col-lg-6 content">
						<h1>Client Download</h1>
						<h3>
							Visit the Shadowsocks Github page to download the client for your
							device
						</h3>
						<hr />
						<a
							href="https://play.google.com/store/apps/details?id=com.github.shadowsocks"
							target="blank"
						>
							<img
								src="playstore.png"
								width="80px"
								class="overshadow m-3 mr-4"
							/>
						</a>
						<a
							href="https://github.com/shadowsocks/shadowsocks-windows/releases/download/4.1.2/Shadowsocks-4.1.2.zip"
							target="blank"
						>
							<img
								src="windowsstore.png"
								width="80px"
								class="overshadow m-3 mr-4"
							/>
						</a>
						<a
							href="https://itunes.apple.com/us/app/wingy-http-s-socks5-proxy-utility/id1178584911"
							target="blank"
						>
							<img
								src="applestore.png"
								width="80px"
								class="overshadow m-3 mr-4"
							/>
						</a>
						<a
							href="https://github.com/shadowsocks/shadowsocks-qt5/wiki/Installation"
							target="blank"
						>
							<img src="tux.png" width="80px" class="overshadow m-3" />
						</a>
						<hr />
					</div>

					<div class="col-lg-6 content">
						<h1>Manual Install</h1>
						<h3>
							We also host versions here but these may not be the most recent
							builds:
						</h3>
						<hr />
						<a href="ss-uni-461.apk">
							<i
								class="fa fa-android fa-4x m-4 overshadow"
								aria-hidden="true"
								style={{ color: 'green' }}
							/>
						</a>
						<a href="ss-win-412.zip">
							<i class="fa fa-windows fa-4x m-4 " aria-hidden="true" />
						</a>
						<a
							href="https://itunes.apple.com/us/app/wingy-http-s-socks5-proxy-utility/id1178584911"
							target="blank"
						>
							<i
								class="fa fa-apple fa-4x m-4 overshadow"
								aria-hidden="true"
								style={{ color: 'silver' }}
							/>
						</a>
						<hr />
					</div>
					<div class="col-lg-12 content">
						<h1>Configure Client</h1>
						<h3>Setup your devices client using the instructions below:</h3>
						<hr />
						<a
							href="https://shadowsocks.org/en/download/clients.html"
							target="blank"
						>
							<button class="btn btn-default btn-lg">
								<i class="fa fa-cogs  mr-2" aria-hidden="true" /> Configuration
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Setup;
