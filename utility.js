import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js@2.7.1';

async function getMembers() {
    const supabaseUrl = 'https://xbjqfchadtujvvygkrui.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhianFmY2hhZHR1anZ2eWdrcnVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1OTc3MzYsImV4cCI6MjA1ODE3MzczNn0.28kUpBvmKOzrwaVpI9yA7EiqaexZic1erElczZRyPqg';
    const supabase = createClient(supabaseUrl, supabaseKey);

    let { data: members, error } = await supabase
    .from('members')
    .select('*')

    let tableBody = document.getElementById('member-rows');
    for (let member of members) {
        tableBody.innerHTML += `<tr>
            <td>${member.first_name}</td>
            <td>${member.last_name}</td>
            <td>${member.major}</td>
            <td>${member.favorite_number}</td>
            <td>${member.favorite_color}</td>
        </tr>`;
    }
}

getMembers();