package codigoalvo.labang.ws;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import codigoalvo.labang.dto.Info;

@Path("/info")
public class HelloService {

	@GET
	@Path("hello")
	@Produces(MediaType.APPLICATION_JSON)
	public Info hello() {
		return new Info("teste", "Hello World");
	}

}
