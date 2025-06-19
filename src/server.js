import app from "./app.js";
import mongoConnectionInstance from "./config/mongo_atlas.config.js";
import { config } from "./config/config.js";

const startServer = async () => {
	try {
		await mongoConnectionInstance.connect();

		app.listen(config.PORT, () => {
			console.log(
				`ttp://${config.HOST}:${config.PORT}`,
			);
		});
	} catch (e) {
		console.error(
			e.message,
		);
	}
};

startServer();



