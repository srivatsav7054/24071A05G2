import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class UserServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        // Get values
        String name = request.getParameter("name");
        String email = request.getParameter("email");
        String age = request.getParameter("age");

        // Output in table
        out.println("<html><body>");
        out.println("<h2>User Details</h2>");

        out.println("<table border='1' cellpadding='10'>");
        out.println("<tr><th>Field</th><th>Details</th></tr>");
        out.println("<tr><td>Name</td><td>" + name + "</td></tr>");
        out.println("<tr><td>Email</td><td>" + email + "</td></tr>");
        out.println("<tr><td>Age</td><td>" + age + "</td></tr>");
        out.println("</table>");

        out.println("</body></html>");
	out.println("</table>");

out.println("<hr>");
out.println("<footer style='text-align:center; margin-top:20px;'>");
out.println("© Roll No:24071A05G2");
out.println("</footer>");

out.println("</body></html>");
    }
}