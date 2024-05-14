import puppeteer from 'puppeteer';

(async () => {
    // Launch Puppeteer and create a new browser instance
    const browser = await puppeteer.launch({ headless: false });

    // Create a new page in the browser
    const page = await browser.newPage();

    // Set the viewport size
    await page.setViewport({ width: 1905, height: 902 });

    // Navigate to Facebook login page
    await page.goto('https://web.facebook.com/');

    // Fill in the email and password fields
    await page.type('#email', 'YourEmailOrPhone');
    await page.type('#pass', 'YourPassword');

    // Submit the login form
    await page.click('button[type="submit"]');

    // Wait for navigation to complete
    await page.waitForNavigation();

    // Loop through 100 times
    for (let index = 0; index < 100; index++) {
        // Navigate to the user's friends page
        await page.goto('https://web.facebook.com/YourUserNameOrId/friends');

        // Scroll the page down by a certain amount
        await page.evaluate(() => {
            window.scrollBy(0, 8910);
        });

        // Wait for a certain amount of time
        await new Promise(resolve => setTimeout(resolve, 3000));

        // CSS selector for friend items
        const itemsSelector = '.x78zum5.x1q0g3np.x1a02dak.x1qughib div .x9f619.x1n2onr6.x1ja2u2z.x78zum5.x2lah0s.x1qughib.x6s0dn4.xozqiw3.x1q0g3np.xykv574.xbmpl8g.x4cne27.xifccgj';

        // Find all elements matching the selector
        const items = await page.$$(itemsSelector);

        // Loop through each item and click on it
        for (const item of items) {
            try {
                await item.click();

                // Wait for a certain amount of time
                await new Promise(resolve => setTimeout(resolve, 1000));

                // Handle specific item interactions
                try {
                    const specificItem = await page.$('.x1n2onr6.xcxhlts.xe5xk9h .x1jx94hy.xdney7k.xu5ydu1.xt3gfkd.x8ii3r7.x9f619.x6ikm8r.x10wlt62.x168nmei .x1qjc9v5.x7sf2oe.x78zum5.xdt5ytf.x1n2onr6.x1al4vs7 .x1o1ewxj.x3x9cwd.x1e5q0jg.x13rtm0m.x78zum5.xdt5ytf.x1iyjqo2.x1al4vs7 .xb57i2i.x1q594ok.x5lxg6s.x6ikm8r.x1ja2u2z.x1pq812k.x1rohswg.xfk6m8.x1yqm8si.xjx87ck.xx8ngbg.xwo3gff.x1n2onr6.x1oyok0e.x1odjw0f.x1e4zzel.x1qjc9v5.x9f619.x78zum5.xdt5ytf.xkhd6sd.x4uap5.x1ten1a2.xz7cn9q.x168biu4 .x78zum5.xdt5ytf.x1iyjqo2.x1n2onr6 .x1i10hfl.xjbqb8w.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x972fbf.xcfux6l.x1qhh985.xm0m39n.xe8uvvx.x1hl2dhg.xggy1nq.x1o1ewxj.x3x9cwd.x1e5q0jg.x13rtm0m.x87ps6o.x1lku1pv.x1a2a7pz.xjyslct.x9f619.x1ypdohk.x78zum5.x1q0g3np.x2lah0s.xnqzcj9.x1gh759c.xdj266r.xat24cr.x1344otq.x1de53dj.x1n2onr6.x16tdsg8.x1ja2u2z.x6s0dn4.x1y1aw1k.xwib8y2:last-child');
                    await specificItem.click();
                    await new Promise(resolve => setTimeout(resolve, 1000));
                } catch (error) {
                    // Handle errors
                }

                // Additional interactions if needed
                try {
                    const conB = await page.$('.__fb-light-mode.x1qjc9v5.x9f619.x78zum5.xdt5ytf.x1iyjqo2.xl56j7k.xshlqvt .x9f619.x78zum5.xl56j7k.x2lwn1j.xeuugli.x47corl.x1qjc9v5.x1bwycvy.x1e558r4.x150jy0e.x1x97wu9.xbr3nou.xqit15g.x1bi8yb4 .x1n2onr6.x1ja2u2z.x1afcbsf.xdt5ytf.x1a2a7pz.x71s49j.x1qjc9v5.xrjkcco.x58fqnu.x1mh14rs.xfkwgsy.x78zum5.x1plvlek.xryxfnj.xcatxm7.x1n7qst7.xh8yej3 .x1qjc9v5.x78zum5.xdt5ytf.x1n2onr6.x1al4vs7.x1jx94hy.xrjkcco.x58fqnu.x1mh14rs.xfkwgsy.x104qc98.x1gj8qfm.x1iyjqo2.x6ikm8r.x10wlt62.x1likypf.xzit4ce.x1e9k66k.x12l8kdc .x1o1ewxj.x3x9cwd.x1e5q0jg.x13rtm0m.x78zum5.xdt5ytf.x1iyjqo2.x1al4vs7 .x78zum5.xdt5ytf.x1iyjqo2.x1yr2tfi.x1n2onr6.x1jxyteu.x1mfppf3 .x1jx94hy.xh8yej3.x1hlgzme.xvcs8rp.x1bpvpm7.xefnots.x13xjmei.xv7j57z .x1n2onr6.x1ja2u2z.x9f619.x78zum5.xdt5ytf.x2lah0s.x193iq5w .x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x1iyjqo2.x2lwn1j .x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x2lah0s.x193iq5w.x1swvt13.x1pi30zi.xyamay9.x1l90r2v .x9f619.x1n2onr6.x1ja2u2z.x78zum5.x2lah0s.x1nhvcw1.x1qjc9v5.x1a02dak.x15zctf7 .x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x2lah0s.x193iq5w.x1r8uery.xl9nvqe.x17ot9bj');
                    await conB.click();
                    await new Promise(resolve => setTimeout(resolve, 1000));
                } catch (error) {
                    // Handle errors
                }

            } catch (error) {
                // Log errors
                console.error('Error clicking on item:', error);
            }
        }
    }

    // Close the browser
    await browser.close();
})();
