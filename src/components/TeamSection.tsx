import { Mail, Github, Linkedin } from "lucide-react";

const team = [
  { name: "Deepika T", email: "thota.deepika.05@gmail.com", dept: "Computer Science & Engineering" },
  { name: "Rajuri Likhitha", email: "likhitharajuri071@gmail.com", dept: "Computer Science & Engineering" },
  { name: "PP Vishalaachi", email: "vishalaachi.pp@gmail.com", dept: "Computer Science & Engineering" },
  { name: "Manjeet Roy", email: "ymanjeet7063@gmail.com", dept: "Electronics & Telecom Engineering" },
  { name: "Dr. Savitri Kulkarni", email: "savitrikulkarni@rvce.edu.in", dept: "Electronics & Telecom Engineering", mentor: true },
];

export function TeamSection() {
  return (
    <section className="py-24 bg-gradient-nature">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Research Team
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Meet the <span className="text-gradient">Researchers</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            MS Ramaiah Institute of Technology, Bengaluru, India
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="group p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-elevated transition-all duration-300 text-center"
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-hero mx-auto mb-4 flex items-center justify-center text-2xl text-primary-foreground font-display font-bold group-hover:scale-110 transition-transform">
                {member.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
              </div>

              <h3 className="font-display font-semibold mb-1">{member.name}</h3>
              
              {member.mentor && (
                <span className="inline-block px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-medium mb-2">
                  Mentor
                </span>
              )}
              
              <p className="text-xs text-muted-foreground mb-4">{member.dept}</p>

              <div className="flex justify-center gap-2">
                <a
                  href={`mailto:${member.email}`}
                  className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Institution */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-3xl bg-card border border-border shadow-soft">
            <div className="text-4xl mb-4">🏛️</div>
            <h3 className="font-display text-xl font-semibold mb-2">MS Ramaiah Institute of Technology</h3>
            <p className="text-muted-foreground">Bengaluru, Karnataka, India</p>
            <p className="text-sm text-accent mt-2">IEEE Published Research • 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
}
