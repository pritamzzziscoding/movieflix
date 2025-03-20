import { Form } from "react-router-dom"

export const contactData = async ({ request }) => {
    try {
        const res = await request.formData();
        console.log(res);
        const data = Object.fromEntries(res)
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}


export const Contact = () => {
    return <div className="contact grid sm:grid-cols-2 gap-3">
        <Form method="POST" action="" className="form flex flex-row gap-5 shadow-xl">
            <label className="text-2xl" htmlFor="name">Name</label>
            <input className="text-2xl" type="text" name="name" id="name" required/>

            <label className="text-2xl" htmlFor="email">Email</label>
            <input className="text-2xl" type="text" name="email" id="email" required/>

            <label className="text-2xl" htmlFor="message">Message</label>
            <textarea className="text-2xl" name="message" id="message"></textarea>

            <button type="submit" className="explore rounded-2xl text-2xl bg-green-500 font-bold w-30">Click</button>
        </Form>
        <div className="flex items-center">
            <p className="sm:text-5xl text-3xl text-center font-bold">Provide us suggesions to improve our features</p>
        </div>
    </div>
}