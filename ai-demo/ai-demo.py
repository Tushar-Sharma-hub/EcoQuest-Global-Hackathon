def suggest_next_challenge(user_history):
    # Simple rule-based: recommend least-frequent type
    challenge_types = ["tree_planting", "waste_audit", "water_conservation"]
    done = {c: 0 for c in challenge_types}
    for entry in user_history:
        done[entry["type"]] += 1
    return min(done, key=done.get)

if __name__ == "__main__":
    demo_history = [
        {"type": "tree_planting"}, {"type": "waste_audit"}, {"type": "tree_planting"},
    ]
    print("Suggested challenge:", suggest_next_challenge(demo_history))
