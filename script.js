const project_container = document.getElementById('projects-container')


const fetchProjects = async () => {
    fetch('projects.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
}


const createProjectCard = () => {
    const projectEl = document.createElement('div')
    
    const projectInnerHTML = `
        <a href="./projects/01.expanding_cards/index.html">01 -> Expanding Cards</a> <br>
        <a href="./projects/02.progress_steps/index.html">02 -> Progress Steps</a> <br>
        <a href="./projects/03.rotating_navigation/index.html"> 03 -> Rotating Navigation</a> <br>
        <a href="./projects/04.hidden_search/index.html">04 -> Hidden Search</a> <br>
        <a href="./projects/05.blurry_loading/index.html">05 -> Blurry Loadding</a> <br>
        <a href="./projects/06.scroll_animation/index.html">06 -> Scroll Animation</a> <br>
        <a href="./projects/07.split_landing/index.html">07 -> Split Landing</a> <br>
        <a href="./projects/08.form_wave/index.html">08 -> From Wave</a> <br>
        <a href="./projects/09.sound_board/index.html">09 -> Sound Board</a> <br>
        <a href="./projects/10.dads_joke/index.html">10 -> Dads Joke</a> <br>
        <a href="./projects/11.event_keycodes/index.html">11 -> Event Keycodes</a> <br>
        <a href="./projects/12.faq_collapse/index.html">12 -> FAQ Collapse</a> <br>
        <a href="./projects/13.random_picker/index.html">13 -> Random Picker</a> <br>
        <a href="./projects/14.animated_navigation/index.html">14 -> Animated Navigation</a> <br>
        <a href="./projects/15.counter/index.html">15 -> Counter</a> <br>
        <a href="./projects/16.drink_water/index.html">16 -> Drink Water</a> <br>
        <a href="./projects/17.movie_app/index.html">17 -> Movie App</a> <br>
        <a href="./projects/18.background_slider/index.html">18 -> Background Slider</a> <br>
        <a href="./projects/19.theme_clock/index.html">19 -> Theme Clock</a> <br>
        <a href="./projects/20.button_ripple/index.html">20 -> Button Ripple</a> <br>
        <a href="./projects/21.drag_n_drop/index.html">21 -> Drang and Drop</a> <br>
        <a href="./projects/22.drawing_app/index.html">22 -> Drawwing app</a> <br>
        <a href="./projects/23.kinetic_loader/index.html">23 -> Kinectic Loader</a> <br>
        <a href="./projects/24.content_placeholder/index.html">24 -> Content Placeholder</a> <br>
        <a href="./projects/25.sticky_nav/index.html">25 -> Sticky Nav</a> <br>
        <a href="./projects/26.vertical_slider/index.html">26 -> Vertical Slider</a> <br>
        <a href="./projects/27.toast_notification/index.html">27 -> Toast Notification</a> <br>
        <a href="./projects/28.github_profile/index.html">28 -> GitHub Profile</a> <br>
        <a href="./projects/29.double_heart_click/index.html">29 -> Double Heart Click</a> <br>
        <a href="./projects/30.auto_text_effect/index.html">30 -> Auto Text Effect</a> <br>
        <a href="./projects/31.password_generator/index.html">31 -> Password Generator</a> <br>
        <a href="./projects/32.style_checkboxes/index.html">32 -> Style Checkboxes</a> <br>
        <a href="./projects/33.notes_app/index.html">33 -> Notes app</a> <br>
        <a href="./projects/34.final_countdown/index.html">34 -> Final Countdown</a> <br>
        <a href="./projects/35.image_carousel/index.html">35 -> Image Carrousel</a> <br>
        <a href="./projects/36.hoverboard/index.html">36 -> Hoverboard</a> <br>
        <a href="./projects/37.pokedex/index.html">37 -> Pokedex</a> <br>
        <a href="./projects/38.mobile_tab_navigation/index.html">38 -> Mobile Navigation</a> <br>
        <a href="./projects/39.password_strength/index.html">39 -> Pasword Strength</a> <br>
        <a href="./projects/40.3d_background_boxes/index.html">40 -> 3D Background Boxes</a> <br>
        <a href="./projects/41.verify_account/index.html">41 -> Verify Account</a> <br>
        <a href="./projects/42.live_user_filter/index.html">42 -> Live User Filter</a> <br>
        <a href="./projects/43.feedback_ui/index.html">43 -> Feedback UI</a> <br>
        <a href="./projects/44.custom_range_slider/index.html">44 -> Custom Range Slider</a> <br>
        <a href="./projects/45.netflix_navigation/index.html">45 -> Netflix Navigation</a> <br>
        <a href="./projects/46.quiz_app/index.html">46 -> Quiz App</a> <br>
        <a href="./projects/47.testimonial_box_switcher/index.html">47 -> Testimonial Box Switcher</a> <br>
        <a href="./projects/48.random_image_feed/index.html">48 -> Random Image Feed</a> <br>
        <a href="./projects/49.todo_list/index.html">49 -> Todo List</a> <br>
        <a href="./projects/50.insect_catch_game/index.html">50 -> Insect Catch Game</a> <br>
    `
    projectEl.innerHTML = projectInnerHTML

    project_container.appendChild(projectEl)
}

createProjectCard()