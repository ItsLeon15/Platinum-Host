<?php
$pagetitle = "Unsubscribe";
$to = "support@platinumhost.xyz";
$subject = "Unsubscribed";
$message = "Someone has unsubscribed from the mailing list";
$headers = "From: Platinum Hosting <";
mail($to,$subject,$message,$headers,"-f".$to);
echo "You have been unsubscribed from the mailing list";
?>
