function FontPreload() {
    return (
        <div style={{ position: 'absolute', zIndex: '-2' }}>
            <p style={{ fontFamily: 'Roboto Slab', fontSize: '1px', color: 'transparent' }}>Roboto Slab</p>
            <p style={{ fontFamily: 'Oleo Script Swash Caps', fontSize: '1px', color: 'transparent' }} >Oleo Script Swash Caps</p>
        </div>
    )
}

export default FontPreload