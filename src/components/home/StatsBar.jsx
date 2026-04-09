import './StatsBar.css'

const STATS = [
    {
        id: 's1',
        display: (
            <>
                $6<span className="stats-bar-accent">B</span>
                <span className="stats-bar-plus">+</span>
            </>
        ),
        label: 'Assets Managed in Core Banking Transformation',
    },
    {
        id: 's2',
        display: (
            <>
                125<span className="stats-bar-accent">K</span>
                <span className="stats-bar-plus">+</span>
            </>
        ),
        label: 'Members Impacted Across Financial Institutions',
    },
    {
        id: 's3',
        display: (
            <>
                100<span className="stats-bar-accent">K</span>
                <span className="stats-bar-plus">+</span>
            </>
        ),
        label: 'Professionals Trained Across 90+ Countries',
    },
    {
        id: 's4',
        display: (
            <>
                7<span className="stats-bar-plus">+</span>
            </>
        ),
        label: 'Years Delivering High-Impact Solutions Globally',
    },
]

const StatsBar = () => {
    return (
        <section className="stats-bar" aria-label="Impact statistics">
            <div className="stats-bar-inner">
                {STATS.map((stat) => (
                    <div key={stat.id} className="stats-bar-item">
                        <div className="stats-bar-number">{stat.display}</div>
                        <div className="stats-bar-label">{stat.label}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default StatsBar
