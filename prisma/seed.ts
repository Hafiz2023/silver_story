import { prisma } from '../src/lib/prisma'

const projects = [
    {
        title: "The Azure Penthouse",
        category: "Residential",
        location: "Mumbai, India",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2874&auto=format&fit=crop"
    },
    {
        title: "Innovate Tech Hub",
        category: "Commercial",
        location: "Bangalore, India",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2938&auto=format&fit=crop"
    },
    {
        title: "Serenity Spa & Resort",
        category: "Hospitality",
        location: "Goa, India",
        image: "https://images.unsplash.com/photo-1571896349842-68c894913d3e?q=80&w=2940&auto=format&fit=crop"
    },
    {
        title: "Minimalist Urban Loft",
        category: "Residential",
        location: "Delhi, India",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2853&auto=format&fit=crop"
    },
    {
        title: "The Golden Bistro",
        category: "Hospitality",
        location: "Kolkata, India",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940&auto=format&fit=crop"
    },
    {
        title: "Skyline Corporate Office",
        category: "Commercial",
        location: "Hyderabad, India",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2938&auto=format&fit=crop"
    },
    {
        title: "Zen Garden Home",
        category: "Residential",
        location: "Pune, India",
        image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2940&auto=format&fit=crop"
    },
    {
        title: "Vogue Fashion Studio",
        category: "Commercial",
        location: "Mumbai, India",
        image: "https://images.unsplash.com/photo-1504384308090-c54be385363d?q=80&w=1587&auto=format&fit=crop"
    },
];

async function main() {
  console.log(`Start seeding ...`)
  for (const p of projects) {
    const project = await prisma.project.create({
      data: p,
    })
    console.log(`Created project with id: ${project.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
