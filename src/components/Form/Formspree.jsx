
import React from 'react'

const Fsform = () => (
	<div>
		<form action="https://formspree.io/antekai00@email.com" method="POST">
			<input type="text" name="name" placeholder="Your name.." />
			<input type="email" name="_replyto" placeholder="Your e-mail.." />
            <textarea name="Your message..." placeholder="Your message"></textarea>
			<input type="submit" value="Send"/>
		</form>
	</div>
)
 
export default Fsform