---
layout: layout.njk
title: "Submit Your Band"
---

<section class="content-section form-page">
    <div class="container">
        <h2>Submit a Band for the Archive</h2>
        <p>
            Help us build the most complete record of Long Island punk and hardcore history. Fill out the form below with as much detail as you can. All submissions will be reviewed by an admin before being published. We are looking for bands of any era, from the 80s pioneers to the bands playing their first show last week.
        </p>

        <!-- 
            This form uses a 'mailto' action. It won't go to a server.
            Instead, it will open the user's default email client (like Outlook, Apple Mail, or a Gmail compose window)
            with the 'to', 'subject', and 'body' fields pre-filled.
        -->
        <form 
            class="submission-form" 
            action="mailto:xdownthedrain@gmail.com" 
            method="POST" 
            enctype="text/plain"
        >
            <div class="form-group">
                <label for="bandName">Band Name*</label>
                <input type="text" id="bandName" name="Band Name" required>
            </div>

            <div class="form-group">
                <label for="hometown">Hometown* (e.g., Mastic, Amityville)</label>
                <input type="text" id="hometown" name="Hometown" required>
            </div>

            <div class="form-group">
                <label for="yearsActive">Years Active* (e.g., 2004-2007, or 2022-Present)</label>
                <input type="text" id="yearsActive" name="Years Active" required>
            </div>
            
            <div class="form-group">
                <label for="genre">Genre(s)* (e.g., Hardcore, Pop-Punk, D-Beat)</label>
                <input type="text" id="genre" name="Genre" required>
            </div>

            <div class="form-group">
                <label for="bio">Band Bio / History*</label>
                <textarea id="bio" name="Bio" rows="8" required></textarea>
            </div>
            
            <div class="form-group">
                <label for="members">Members (optional)</label>
                <input type="text" id="members" name="Members">
            </div>

            <hr>
            <p class="form-hint">
                Provide links to wherever the band's music or info can be found. Don't worry if they're old or defunct! MySpace, old blog links, and Bandcamp are all perfect.
            </p>

            <div class="form-group">
                <label for="spotify">Spotify Link</label>
                <input type="url" id="spotify" name="Spotify">
            </div>
            <div class="form-group">
                <label for="bandcamp">Bandcamp Link</label>
                <input type="url" id="bandcamp" name="Bandcamp">
            </div>
            <div class="form-group">
                <label for="myspace">MySpace Link</label>
                <input type="url" id="myspace" name="MySpace">
            </div>
             <div class="form-group">
                <label for="other">Other Link (Facebook, Instagram, etc.)</label>
                <input type="url" id="other" name="Other">
            </div>

            <button type="submit" class="btn-submit">Prepare Submission Email</button>
        </form>

    </div>
</section>