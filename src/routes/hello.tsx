import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute('/hello')({
    // server: {
    //     handlers: {
    //         GET: async ({request}) => {
    //             console.log("Someone hit our public API!");

    //             const body = await request.json();

    //             return Response.json({ message: `Hello ${body.name}` }, {
    //                 headers: { 
    //                     "Cache-Control": "Public, s-maxage=60",
    //                     "Access-Control-Allow-Origin": "*" // Allow CORS for all origins
    //                 }
    //             });
    //         }
    //     }
    // },
    server: {
  handlers: {
    POST: async ({ request }) => {
      const body = await request.json();

      return Response.json(
        { message: `Hello ${body.name}` },
        {
          headers: {
            "Cache-Control": "Public, s-maxage=60",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    },
  },
},
    component: HelloComponent,
});


function HelloComponent() {
    const [reply, setReply] = useState('');

  

    return (
        <main>
           <button
           type="button"
           className="bg-blue-500 text-white p-2 rounded"
           onClick={() =>{
            //this button manually fetch its own route's POST handler!
            fetch('/hello',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: 'tanstack' }),
            }).then(res => res.json()).then(data => {
                setReply(data.message);
            });
           }}
           >
            Say Hello {reply && `- ${reply}`}
           </button>
        </main>
    );
}